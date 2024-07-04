from .models import Product, ProductCategory, ProductImage, Size
from rest_framework.serializers import ModelSerializer
from rest_framework import serializers


class SizeSerializer (ModelSerializer):

    class Meta:
        model = Size
        fields = "__all__"


class ProductImageSerializer (ModelSerializer):

    class Meta:
        model = ProductImage
        fields = "__all__"


class ProductCategorySerializer (ModelSerializer):
    numbers_of_product = serializers.SerializerMethodField()

    class Meta:
        model = ProductCategory
        fields = "__all__"

    def get_numbers_of_product(self, obj):
        return obj.numbers_of_product


class ProductSerializer (ModelSerializer):

    available_sizes = SizeSerializer(many=True)
    category = ProductCategorySerializer()
    photos = ProductImageSerializer(many=True)

    class Meta:
        model = Product
        fields = "__all__"
