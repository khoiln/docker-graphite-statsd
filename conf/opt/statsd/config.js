{
  "graphiteHost": "127.0.0.1",
  "graphitePort": 2003,
  "port": 8125,
  "flushInterval": 10000,
  "servers": [
  	{
  		"server": "udp"
  	},
  	{
  		"server": "statsd-http-interface",
  		"port" : 8127,
  	},
  ],
}
