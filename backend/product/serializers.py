from rest_framework import serializers
from django_filters import rest_framework as filters
from product.models import Product, Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class productFilter(filters.Filter):
    class Meta:
        model = Product
        fields = {
            'category': ['exact'],
        }


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"
        filter_class = productFilter
