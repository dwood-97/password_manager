from flask_migrate import Migrate
from app.models import db

migrate = Migrate(app, db)
