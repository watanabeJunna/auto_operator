from django.views import generic


class About(generic.TemplateView):
    template_name = 'about.html'


class About1(generic.TemplateView):
    template_name = 'about.1.html'
