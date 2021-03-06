Run tasks
---------

This bundle provides the 'idci_task.processor.rabbitmq' service which is used to start tasks.

The processor only send messages to rabbitmq, so in order to consume messages, you will need to run consumer in background:

```php
php app/console rabbitmq:consumer extract_rule
php app/console rabbitmq:consumer task
php app/console rabbitmq:consumer action
```

### Start tasks from a configuration

```php
$taskConfiguration = new TaskConfiguration();
$taskConfiguration->setName('task_configuration_name');
$taskConfiguration->setExtractRule(
    '{
        "service": "extract_rule_service_name",
        "parameters": {
            "data": ["data1", "data2", "data3"]
        }
    }'
);
$taskConfiguration->setWorkflow(
    '{
        "actions": [{
            "name": "action_1_name",
            "service": "",
            "parameters": {
                "data": "{{ extracted_data.whatever_was_extracted }}"
            }
        }, {
            "name": "action_2_name",
            "service": "action_service_2_name",
            "parameters": {
                "data": "{{ extracted_data.whatever_was_extracted }}",
                "other_data": "{{ action_data.whatever }}"
            }
        }],
        "workflow": {
            "name": "workflow_name",
            "first_action_name": "action_1_name",
            "flows": {
                "action_1_name": {
                    "default_next": "action_2_name"
                }
            }
        }
    }'
);
$this->get('idci_task.processor.rabbitmq')->startTasks($taskConfiguration);
```

The name of the action can be useful in case you would like to use the same action service multiple times in a workflow.

### Start a task from a single action

```php
$this->processor->startTask('action_service_name', array('data1' => 21, 'data2' => 'fake_data'));
```

### Resume a failed task

```php
// We have to use getNext() method because findByStatus returns a cursor.
$task = $this
    ->get('doctrine.odm.mongodb.document_manager')
    ->getRepository('IDCITaskBundle:Task')
    ->findByStatus(ActionStatus::ERROR)
    ->getNext();
$this->processor->resume($task);
```

Summary
-------

- [Introduction](../../README.md#introduction)
    - [Glossary](../../README.md#glossary)
    - [Simple schema](../../README.md#simple-schema)
    - [Lifecycle of a task with RabbitMq](../../README.md#lifecycle-of-a-task-with-rabbitmq)
- [Installation](../../README.md#installation)
- [Run the tests](../../README.md#run-the-tests)
- [How to create an extract rule service](how_to_create_extract_rule_service.md)
- [How to create an action service](how_to_create_action_service.md)
- [How to create a task configuration object](how_to_create_task_configuration_object.md)
- [Persist a task configuration](persist_task_configurations.md)
- [Use the task configuration form type](editors.md)
- [How to run tasks](how_to_run_tasks.md)
- [How to scale your application to run tasks concurrently](scalability.md)
- [How to separate actions in different applications](routing.md)
- [Example](example.md)
- [UML](uml.md)
