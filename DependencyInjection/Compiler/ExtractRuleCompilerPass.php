<?php

/**
 * @author: Brahim Boukoufallah <brahim.boukoufallah@idci-consulting.fr>
 */

namespace IDCI\Bundle\TaskBundle\DependencyInjection\Compiler;

use Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Reference;
use Symfony\Component\DependencyInjection\DefinitionDecorator;
use IDCI\Bundle\TaskBundle\Exception\UndefinedExtractRuleException;
use IDCI\Bundle\TaskBundle\ExtractRule\ExtractRuleRegistry;
use IDCI\Bundle\TaskBundle\ExtractRule\ExtractRuleConfigurationRule;

class ExtractRuleCompilerPass implements CompilerPassInterface
{
    /**
     * {@inheritdoc}
     */
    public function process(ContainerBuilder $container)
    {
        if (!$container->hasDefinition(ExtractRuleRegistry::class)) {
            return;
        }

        $registryDefinition = $container->getDefinition(ExtractRuleRegistry::class);
        $extractRules = $container->getParameter('idci_task.extract_rules');

        foreach ($container->findTaggedServiceIds('idci_task.extract_rule') as $id => $tags) {
            foreach ($tags as $attributes) {
                $alias = isset($attributes['alias'])
                    ? $attributes['alias']
                    : $id
                ;

                $registryDefinition->addMethodCall(
                    'setRule',
                    array($alias, new Reference($id))
                );
            }
        }

        foreach ($extractRules as $name => $configuration) {
            $serviceDefinition = new DefinitionDecorator(ExtractRuleConfigurationRule::class);

            if (null !== $configuration['parent']) {
                if (!$container->hasDefinition($this->getDefinitionName($configuration['parent']))) {
                    throw new UndefinedExtractRuleException($configuration['parent']);
                }

                $configuration['parent'] = new Reference(
                    $this->getDefinitionName($configuration['parent'])
                );
            }

            $configuration['name'] = $name;

            $serviceDefinition->setAbstract(false);
            $serviceDefinition->setPublic(true);
            $serviceDefinition->replaceArgument('$extractRuleRegistry', $configuration);

            $container->setDefinition(
                $this->getDefinitionName($name),
                $serviceDefinition
            );
        }
    }

    /**
     * Get definition name.
     *
     * @param string $name
     *
     * @return string
     */
    protected function getDefinitionName($name)
    {
        return sprintf('idci_task.extract_rule_configuration.%s', $name);
    }
}
