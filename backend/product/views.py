from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from product.models import Product, Category
from product.serializers import ProductSerializer, CategorySerializer


# Create your views here.


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    # permission_classes = (IsAuthenticated,)
    queryset = Product.objects.all()

    def get_queryset(self):
        queryset = super().get_queryset()
        # print(self.request.query_params)
        radius = self.request.query_params.get("category")
        print(radius)
        if radius:
            queryset = queryset.filter(category__name=radius)
        return queryset
        # category = self.request.query_params("Category")
        # if category:
        #     queryset = queryset.filter(category=category)
        # return queryset


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    # permission_classes = (IsAuthenticated,)
