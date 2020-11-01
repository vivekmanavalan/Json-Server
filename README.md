JSON -SERVER:

	This project uses inbuilt json-server to retrieve data from the json files residing in this project itself
	
	Steps to setup JSON server:
	
	Step 1: npm install json-server
	
	Step 2: Go to package.json files
	
	Step 3: add your json files and specify a port number
	
	"json1:server": "json-server --watch diesel.json --port 4000",
    "json2:server": "json-server --watch expenses.json --port 5000",
    "json3:server": "json-server --watch truckload.json --port 5001",
    "json4:server": "json-server --watch fastag.json --port 7000",
    
	
	Step 4: add a new key named "dev" and specify which files needed to be loaded when application starts
	
	"dev": "concurrently \"npm start\" \"npm run json1:server\" \"npm run json2:server\" \"npm run json3:server\" \"npm run json4:server\""
	
	in the above example we load all the files concurrently
	
	Step 5: to run the project use the command  npm run dev