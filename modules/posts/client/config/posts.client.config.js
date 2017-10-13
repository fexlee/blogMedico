(function () {
  'use strict';

  angular
    .module('posts')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: 'Publicaciones',
      state: 'posts',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'posts', {
      title: 'Listado de Publicaciones',
      state: 'posts.list',
      roles: ['*']
    });

    // Add the dropdown create item
    menuService.addSubMenuItem('topbar', 'posts', {
      title: 'Crear Publicación',
      state: 'posts.create',
      roles: ['user']
    });
  }
}());
