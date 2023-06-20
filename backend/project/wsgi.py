"""
WSGI config for project project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'project.settings')

<<<<<<< HEAD
application = get_wsgi_application()

#app = application
=======
application = get_wsgi_application()
>>>>>>> f5b5c6fb6215a321e751ddca2f803f10d462cabc
