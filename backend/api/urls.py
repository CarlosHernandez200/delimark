from django.urls import path, include
from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework import routers
from api.views import CountryViewSet

router = routers.DefaultRouter()
router.register(r'country', CountryViewSet)

from api.views import CustomTokenObtainPairView, RegisterCustomerView, RegisterUserView, SendEmailView, CountryViewSet

urlpatterns = [
    
    # Client User
    path("auth/token/", CustomTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("auth/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("auth/register/", RegisterUserView.as_view(), name="register"),
    path("auth/country/", CountryViewSet.as_view({'get': 'list', 'post': 'create'}), name="country"),
    #path('auth/country/<int:pk>/', CountryViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'}), name='country-detail'),
    
    # Client Authentication
    path("auth/customer/", CustomTokenObtainPairView.as_view(), name="token_customer"),
    path( "auth/customer/register/", RegisterCustomerView.as_view(), name="customer_register"),
    
    path('send-email/', SendEmailView.as_view(), name='send_email'),
    
    # Api product
<<<<<<< HEAD
    path("product/", include("product.urls")),
=======
    path("", include("product.router")),
>>>>>>> f5b5c6fb6215a321e751ddca2f803f10d462cabc
    path('product-filter/', include('product.urls')),
        
    #path("", include("api.router")),
]
