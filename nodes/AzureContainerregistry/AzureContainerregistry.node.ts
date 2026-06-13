import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { v2Description } from './resources/v2';

export class AzureContainerregistry implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Containerregistry',
                name: 'N8nDevAzureContainerregistry',
                icon: { light: 'file:./azure-containerregistry.png', dark: 'file:./azure-containerregistry.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Azure Container Registry runtime metadata API definition',
                defaults: { name: 'Azure Containerregistry' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureContainerregistryApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "v2",
					"value": "v2",
					"description": "Root API"
				}
			],
			"default": ""
		},
		...v2Description
                ],
        };
}
