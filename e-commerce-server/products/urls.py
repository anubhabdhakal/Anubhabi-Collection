from django.urls import path
from .views import ProductsAPIView, ProductDetailsAPIVIew, ProductsCategoryAPIView, ProductsCategoryDetailAPIView

urlpatterns = [
    path('getall/', ProductsAPIView.as_view(), name="get-all-products"),
    path('category/', ProductsCategoryAPIView.as_view(),
         name="get-all-product-categories."),
    path('category/<name>', ProductsCategoryDetailAPIView.as_view()),
    path('<id>/', ProductDetailsAPIVIew.as_view(), name="get-product-detail"),
]
