class BaseConfig(object):
    '''
    Base config class
    '''
    DEBUG = True
    TESTING = Falseclass ProductionConfig(BaseConfig):

class ProductionConfig(BaseConfig):
    '''
    Production specific config
    '''
    DEBUG = Falseclass DevelopmentConfig(BaseConfig):

class DevelopmentConfig(BaseConfig):
    '''
    Development environment specific configuration
    '''
    DEBUG = True
    TESTING = True