
import staticRouter from '../router/static';

export default(paths) => {
    
    const routes = staticRouter
    
    for (const { menuName, menuComponent, menuGroup, menupath } of paths) {
        routes.push({
          path: `${menupath}`,
          name: `${menuName}`,
          component: () => import(/* webpackChunkName: "Main" */ `../views/main/${menuGroup}/${menuComponent}.vue`)
        });
      }
    return routes
}