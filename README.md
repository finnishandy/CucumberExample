https://www.npmjs.com/package/web-terminal

amd to node https://www.npmjs.com/package/nodefy

Jira BDD: https://marketplace.atlassian.com/plugins/pro.behave.hosted

[
	{
		"id": "This-is-an-example-feature",
		"name": "This is an example feature",
		"description": "In order to learn Cucumber\nAs a developer\nI want to make this feature pass",
		"line": 1,
		"keyword": "Feature",
		"uri": "Feature1.feature",
		"elements": [
			{
				"name": "wrote my first scenario",
				"id": "This-is-an-example-feature;wrote-my-first-scenario",
				"line": 6,
				"keyword": "Scenario",
				"description": "",
				"type": "scenario",
				"steps": [
					{
						"name": "a variable set to 1",
						"line": 7,
						"keyword": "Given ",
						"result": {
							"status": "pending"
						},
						"match": {}
					},
					{
						"name": "I increment the variable by 2",
						"line": 8,
						"keyword": "When ",
						"result": {
							"status": "skipped"
						},
						"match": {}
					},
					{
						"name": "the variable should contain 3",
						"line": 9,
						"keyword": "Then ",
						"result": {
							"status": "skipped"
						},
						"match": {}
					}
				]
			}
		]
	}
]