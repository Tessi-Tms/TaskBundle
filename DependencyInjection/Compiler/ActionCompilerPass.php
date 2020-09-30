<?php

/**
 * @author: Brahim Boukoufallah <brahim.boukoufallah@idci-consulting.fr>
 */

namespace IDCI\Bundle\TaskBundle\DependencyInjection\Compiler;

use Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Reference;
use Symfony\Component\DependencyInjection\DefinitionDecorator;
use IDCI\Bundle\TaskBundle\Exception\UndefinedActionException;
use IDCI\Bundle\TaskBundle\Action\ActionRegistry;
use IDCI\Bundle\TaskBundle\Action\Action;

class ActionCompilerPass implements CompilerPassInterface
{
    /**
     * {@inheritdoc}
     */
    public function process(ContainerBuilder $container)
    {
        if (!$container->hasDefinition(ActionRegistry::class)) {
            return;
        }

        $registryDefinition = $container->getDefinition(ActionRegistry::class);
        $actions = $container->getParameter('idci_task.actions');

        foreach ($container->findTaggedServiceIds('idci_task.action') as $id => $tags) {
            foreach ($tags as $attributes) {
                $alias = isset($attributes['alias'])
                    ? $attributes['alias']
                    : $id
                ;

                $registryDefinition->addMethodCall(
                    'setAction',
                    array($alias, new Reference($id))
                );
            }
        }

        foreach ($actions as $name => $configuration) {
            $serviceDefinition = new DefinitionDecorator(Action::class);

            if (null !== $configuration['parent']) {
                if (!$container->hasDefinition($this->getDefinitionName($configuration['parent']))) {
                    throw new UndefinedActionException($configuration['parent']);
                }

                $configuration['parent'] = new Reference(
                    $this->getDefinitionName($configuration['parent'])
                );
            }

            $configuration['name'] = $name;

            $serviceDefinition->setAbstract($configuration['abstract']);
            $serviceDefinition->setPublic(!$configuration['abstract']);
            $serviceDefinition->replaceArgument(0, $configuration);

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
        return sprintf('idci_task.action_configuration.%s', $name);
    }
}
