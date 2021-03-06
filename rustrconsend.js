var WebRcon = require('/home/tabified/rust-rcon/node_modules/webrconjs')
var argv = require('/home/tabified/rust-rcon/node_modules/yargs')

.argv

// parse the arguments
var command = process.argv[2]
var server = process.argv[3]
var port = process.argv[4]
var pass = process.argv[5]

// Create a new client:
var rcon = new WebRcon(server, port)

// Handle events:
rcon.on('connect', function() {
    //console.log('CONNECTED')
    //console.dir(argv)
    console.log('Sending command: ', command)
    // Run a command once connected:
    rcon.run(command, 0)
    // and disconnect immediately
    rcon.disconnect()
    process.exit()
})
rcon.on('disconnect', function() {
    //console.log('DISCONNECTED')
})
rcon.on('message', function(msg) {
    console.log('MESSAGE:', msg)
})
rcon.on('error', function(err) {
    console.log('ERROR:', err)
    process.exit()
})

// Connect by providing the server's rcon.password:
rcon.connect(pass)
