---
layout: page
title: "Thesis starting September 2024"
permalink: /theses/2024sep/
---


{% assign thesis = site.data.theses_2024september | sort: 'name' %}

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
        {{ i.summary | markdownify }}
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

