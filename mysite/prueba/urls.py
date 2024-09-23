from rest_framework.routers import DefaultRouter
from .views import PruebaView

router = DefaultRouter()
router.register('prueba',PruebaView,basename='prueba')
urlpatterns = router.urls
