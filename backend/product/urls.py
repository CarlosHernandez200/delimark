from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from . import views
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static


router = routers.DefaultRouter()

router.register(r'category', views.CategoryViewSet, 'categoria')
router.register(r"Product", views.ProductViewSet, "producto")

urlpatterns = [
    path("", include(router.urls)),
<<<<<<< HEAD
    #path("docs/", include_docs_urls(title="Producto API")),
    #path("/categoria")
=======
>>>>>>> f5b5c6fb6215a321e751ddca2f803f10d462cabc
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)