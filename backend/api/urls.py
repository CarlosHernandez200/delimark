from django.urls import path, include
from rest_framework_simplejwt.views import TokenRefreshView

from api.views import CustomTokenObtainPairView

urlpatterns = [
    path('auth/token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/register/', TokenRefreshView.as_view(), name='register'),

]