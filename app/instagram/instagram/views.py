from django.shortcuts import render
from django.views import generic


class About(generic.TemplateView):
    template_name = 'about.html'
