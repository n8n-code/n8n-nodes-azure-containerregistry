import type { INodeProperties } from 'n8n-workflow';

export const v2Description: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"v2"
					]
				}
			},
			"options": [
				{
					"name": "v2 Support Check",
					"value": "v2 Support Check",
					"action": "v2 Support Check",
					"description": "Tells whether this Docker Registry instance supports Docker Registry HTTP API v2",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /v2/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"v2"
					],
					"operation": [
						"v2 Support Check"
					]
				}
			}
		},
];
