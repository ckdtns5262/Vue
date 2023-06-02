import  {createWebHistory, createRouter} from 'vue-router'
import List from './components/List'
import Home from './components/Home'
import Detail from './components/Detail'
import Error from './components/Error'
import Author from './components/Author'
import Comment from './components/Comment'
const routes = [
    {
        path : '/list',
        component : List,
    },
    {
        path : '/home',
        component : Home
    },
    {
        path : '/detail/:id(\\d+)', // 소괄호 안에 숫자만 입력하게끔 정규식
        component : Detail,
        children : [{
            path : 'author',
            component : Author
        },
        {
            path : "comment",
            component : Comment
        }
        ]
    },
    {
        path : '/:anything(.*)', // 404페이지
        component : Error
    }
];

const router = createRouter({
    history : createWebHistory(),
    routes,
})

export default router;