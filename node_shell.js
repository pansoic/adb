const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'7b6841d8-7d8d-4fd7-9a49-030d2fceda46'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
