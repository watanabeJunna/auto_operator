from django.urls import re_path, path
import about.views

urlpatterns = [
    re_path(r'^$', about.views.About.as_view()),
    re_path(r'^1$', about.views.About1.as_view())
]
