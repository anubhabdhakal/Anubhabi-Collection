from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.exceptions import ValidationError
from .serializers import ProductSerializer, ProductCategorySerializer
from .models import Product, ProductCategory
from utils.response import CustomResponse as cr
import json


# Create your views here.

class ProductsAPIView (APIView):
    serializer_class = ProductSerializer
    authentication_classes = []

    def get(self, request: Request) -> Response:

        try:
            products_instance = Product.objects.select_related(
                'category').all().prefetch_related('photos', 'available_sizes')
            serializer = self.serializer_class(
                data=products_instance, many=True)
            serializer.is_valid()
            return cr.success(data=serializer.data, message="Successfully fetched all the products.", status_code=HTTP_200_OK)

        except ValidationError as e:
            return cr.error(data=json.loads(json.dumps(serializer.errors)))


class ProductsCategoryAPIView (APIView):
    serializer_class = ProductCategorySerializer
    authentication_classes = []

    def get(self, request: Request) -> Response:

        try:
            category_instances = ProductCategory.objects.all()
            serializer = self.serializer_class(
                data=category_instances, many=True)
            serializer.is_valid()
            print(serializer.data)
            return cr.success(data=serializer.data, message="Successfully fetched all the products category.", status_code=HTTP_200_OK)

        except ValidationError as e:
            return cr.error(data=json.loads(json.dumps(serializer.errors)))


class ProductsCategoryDetailAPIView (APIView):
    serializer_class = ProductCategorySerializer
    authentication_classes = []

    def get(self, request: Request, name: str) -> Response:

        try:
            category_instances = ProductCategory.objects.get(
                name=name)
            serializer = self.serializer_class(category_instances)
            return cr.success(data=serializer.data, message="Successfully fetched all the products category.", status_code=HTTP_200_OK)

        except ValidationError as e:
            return cr.error(data=json.loads(json.dumps(serializer.errors)))


class ProductDetailsAPIVIew (APIView):
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request: Request, id) -> Response:
        try:
            product_instance = Product.objects.get(id=id)
            serializer = self.serializer_class(product_instance)
            return cr.success(data=serializer.data)
        except Exception as e:
            return cr.error(data=json.loads(json.dumps(serializer.errors)))

    def put(self, request: Request, id) -> Response:

        try:
            product_instance = Product.objects.get(id=id)
            serializer = self.serializer_class(
                product_instance, data=request.data, partial=True)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return cr.success(data=serializer.data, message="Successfulyy updated the product details.", status_code=HTTP_201_CREATED)

        except ValidationError:
            return cr.error(data=json.loads(json.dumps(serializer.errors)))
