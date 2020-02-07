from templates import app

# Load this configuration object for development mode
app.config.from_object('configurations.DevelopmentConfig')
app.run()