---
layout: page
title: "Thesis started in September 2025"
permalink: /theses/2025sep/
---


{% assign thesis = site.data.theses_2025sep | sort: 'name' %}

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


