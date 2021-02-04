---
title: "Using Grommet in React Applications"
categories: ["React", "UI", Javascript]
authors: ["Avinash Murmu"]
description: "In this tutorial, we’re going to learn how to use Grommet as a UI library for React applications. We’ll use Grommet as a UI library of choice to create a pricing component, this would help us have a better understanding of how to use Grommet."
date: 2021-01-25T14:54:54+05:30
draft: false
---

Over the years, the React ecosystem has grown with the invention of libraries that help the development of React applications. In this tutorial, we are going to learn to use Grommet for developing responsive, accessible, and mobile-first components for React applications. We’ll take a closer look at its core concepts, some of its use cases, and build a simple example. It’s important to note that Grommet is open-source with 6.9k stars on GitHub.

This tutorial will be beneficial to readers who are interested in developing responsive components in their React application using Grommet. This article requires a basic understanding of React and Styled-components.

  

### What Is Grommet?

* * *

Grommet is a React component library that boasts of responsive and accessible mobile-first code components. It does this through its components — which are the building blocks for the library. They include Layouts, Types, Colors, Controls, Inputs, Visualizations Media and utilities. All grommet components are inbuilt with accessibility and responsiveness in mind.

Grommet provides support for W3C’s spec which makes it score a huge point in terms of accessibility. It also provides powerful themes and tools that allow you to customize your color, type, component elements and layout needs according to your project needs.

Some popular alternatives to Grommet include tailwindcss and styled components, although very popular among developers, each framework differ in approach in building applications. Grommet is mobile-first, accessible, responsive and themes out of the box and has support for W3C for easy creation of React applications while Tailwind CSS is a highly customizable and utility framework that allows developers to build applications without the restrictions of CSS such as its cascading rules. Styled-components aim to help developers write reusable React components by allowing us to write CSS code in our JavaScript using object literals and it also uses components as low-level styling construct.

In our project, we will be using Grommet in our projects due to its customizable components, accessibility, and theme properties which we’d need as we go forward in this tutorial.

  

### Using Grommet Components

* * *

Grommet like so many other component libraries comes pre-built with some components for layouts and themes such as Box, Card and Header components. To use first you’d need to install the grommet package using NPM or yarn, like the code block below.