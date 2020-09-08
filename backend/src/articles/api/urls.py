from django.urls import path
from rest_framework.routers import DefaultRouter
from articles.api.views import ArticleViewSet


router=DefaultRouter()
router.register(r'', ArticleViewSet, basename='user')
urlpatterns = router.urls

# urlpatterns = [
#     path('' ,ArticleListView.as_view()),
#     path('create/' ,ArticleCreateView.as_view()),
#     path('<pk>/' , ArticleDetailView.as_view()),
#     path('<pk>/update/' , ArticleUpdateView.as_view()),
#     path('<pk>/delete' , ArticleDetailView.as_view()),
# ]
