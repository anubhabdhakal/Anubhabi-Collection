from rest_framework.serializers import ModelSerializer
from rest_framework.exceptions import ValidationError
from .models import Cart


class CartSerializer (ModelSerializer):

    class Meta:
        model = Cart
        fields = ["product"]

    def validate(self, data):
        if "product" not in data:
            raise ValidationError("Product is required.")
        return data

    def update(self, instance, validated_data):
        products = validated_data["product"]
        prev_products = instance.product.all()
        print(prev_products)

        '''
        Getting the list of previous products in the carts
        adding prev list with the new list of product and 
        adding them to the cart
        # '''
        if (len(prev_products) > 0):
            for prev in prev_products:
                products.append(prev)

        for product in products:
            instance.product.add(product)

        return super().update(instance, validated_data)
