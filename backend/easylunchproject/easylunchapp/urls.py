# urls.py
from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from . import views
from .views import UserRegisterView, UserLoginView,UserLogoutView

urlpatterns = [
    path('register/', UserRegisterView.as_view(), name='register'),
    path('login/', UserLoginView.as_view(), name='login'),
    path('logout/', UserLogoutView.as_view(), name='user-logout'),


    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # Product URLs
    path('products/', views.ProductListCreate.as_view(), name='product-list-create'),
    path('products/<int:pk>/', views.ProductUpdate.as_view(), name='product-update'),
    path('products/delete/<int:pk>/', views.ProductDelete.as_view(), name='product-delete'),
    
    # Order URLs
    path('orders/', views.OrderListCreate.as_view(), name='order-list-create'),
    path('orders/<int:pk>/', views.OrderUpdate.as_view(), name='order-update'),
    path('orders/delete/<int:pk>/', views.OrderDelete.as_view(), name='order-delete'),
]
