---
layout: page
title: "Thesis started in February 2026"
permalink: /theses/2026feb/
---


{% assign thesis = site.data.theses_2026feb | sort: 'name' %}

{% for i in thesis %}

<article class="media">
  <figure class="media-left">
    <p class="image">
      <img src="img/{{ i.image }}">
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>{{ i.name }}</strong> 
        <br />
        <em>{{ i.title }}</em>
        <br />
        {{ i.summary }}
        <br />
        <small>Supervisors: {{ i.supervisors}}</small>
        <br />
        {% if i.company %}
          <small>(company involved: {{ i.company }})</small>
        {% endif %}
      </p>
    </div>
  </div>
</article>

{% endfor %}


