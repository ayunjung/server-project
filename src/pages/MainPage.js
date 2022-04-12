import React from 'react'
import styled from 'styled-components'
import Topbar from '../components/Topbar';
import Searchbar from '../components/Searchbar';
import BestUser from '../components/BestUser';
import BestLecturer from '../components/BestLecturer';
import MainLecField from '../components/MainLecField';

function MainPage() {

    const Top = styled.div`
        width: 1200px;
        margin: 30px auto;
    `
    const LecMaindiv = styled.div`
        width: 1200px;
        margin: 0 auto;
    `
    const LecMain = styled.div`
        display: flex;
    `
    const LecMainleft = styled.div`
        width: 65%;
    `
    const LecMainright = styled.div`
        width: 35%;
    `
    const VidioDiv = styled.div`
        width: 100%;
        height: 300px;
    `
    const Lec = [
        {image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX6xVL////6wkX6w0r++vH97Mr6xE36w0v6wkb6wUL6wT/847P+9eT///36xlP+8dr97tH7znH83J796ML70Hj6ymX+9+n72JP71Yj+8dn6ymL83qT84Kv/+/T836n71o370Hf85bn704L6zWxs+jlpAAAE7klEQVR4nO3b63KqOgAFYEgkJNxFEcS7vv87HrDb0xJCEnr2kTizvpn+au1kNfdLPQ8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUGCciiiLSfQnBKVu6PDaYRPOjVHjNsUhOfi9d5cGxyQgJ31bU3yGFP5DSiR9kJDsn/sgquGRuhySBVGJ1QibWxTjeH/sL5W8u9gx2CXk7na93ijNnM1oljEptvl7qbEabhCJQp5IylpGTQ6tFQp7bBOwklYvVaE4o9pYBO6VYIoOeMaHY2Af0/WJqslmOKWHYzAnox5+XkJ7mBEw+r5Xy46wqbB0cTQ0JRTonYPl5Y2lYj2PsNoeyLs/BeJGaR0ul0NEnHM8UmyriNAwpJYLdN4NOmmZLhdDSJyRSvvQufvS0brN4+VGTtXvjaE+bkG2lhBe5o4Vi/armwsFxtKdNGEor7kTR0ZjYPuvx9LYiz6RNyOPhN2PlWMlE/4e4u7oN1ieUVmzlRE+jWb5xtI0aEsrfPE6OJQ4fZOjrUPpm4eSEZzCrlfqVg6syk1kjjb/K3JzzdPSzxWjRltbRp2WcN+N3drUgH9VW563avgQNI59xoN8zrLynDqH2h4o7PEP8ZNg9aQ5KV0HdCu5+VRp2wHQ6YW8XX4nrIf/zKcbqto6cbq6mkyi+MkXsthxOTyGmhOxhTthtnQ7uDjvGE2Fud2B6uri6uTCf6ltG9IvMzSHH5mbmYdEX+2p8ONkbbW7XGL/ZVePWxYh2d8Ck0t8BvzwcbKjW9/itzR3U6XMTPg9Ha/NNYuDeiGqd0OsPR7O6MFxkuNdO5yTshIRu40STsiBvKri1mQm9vrmKrNnspiI6d3kxP2Gv65SV6oVUp3Zt+fa7hB1GRRsrmuvGtTvEXyf0nu31PEqYuNYR5Zd7q3lVwDO5Q55cW9cIqTftZjYyxuRFq2vThbzD3SmmbO05BZXPVP+3ohoxT1XQTCpfPk5Ik7tupdK6kpBVqWLpz+TN33gojLqeetZdyUgvbpZqpSzrCrIdFV/Ie4bRJah43l3k028rs+GUkS6W8DnmNVJzY3IT8xupgPzVzUqhLjpbD3/BzMH4r3m9oDwOyxmN1iXt8HPhd/mTqzKj/LJP0ZHf4bsxJo/vcrLx01ipBtigCe63Yvw28yL9htsidRj9/DsH6683PzzajleW0kBDpPk8KTPx405Gtai5L9EPhXRwvQoO9aW8qbYHw/JFirOL/Hz1IkE6IqrOozOqdIF8HlE8TpswbKSRfAX8csr3RbFXbhODBZal/G4d0D8M7rjt/zLfru9vpKp73CmDuczuPF+yX2Ak5eqNqtLwRVA41Ug1ljimYa31O2b5DfNoJjA6LrI5DB+273xHFw+8ndEA/GXaaC+0rMXt+ISFiTktdbfY9p4xm6polIsRUllXY7LkCc3kzPav9DpRPhY1kyeHAwu/ThRbfTHzdvoQMBS1OePyN6SMlNO98VRPbI3+CMVdf/eUxsyBY1JKS3WX2pXUfNAtsnLyXmZ38Bw5JKWkOsohk3hN7M7/+v9zvo3XovnxYfkL3oJxQtdlHOzzPN8HcXllsx78dB/nbXO4fX2+2Bzrijv4wo2FnBMhug3Q7/6fnlFOXp8PnUsHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADw1/0DJWc2sWyHi6kAAAAASUVORK5CYII=', title: 'HTML/CSS'},
        {image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX6xVL////6wkX6w0r++vH97Mr6xE36w0v6wkb6wUL6wT/847P+9eT///36xlP+8dr97tH7znH83J796ML70Hj6ymX+9+n72JP71Yj+8dn6ymL83qT84Kv/+/T836n71o370Hf85bn704L6zWxs+jlpAAAE7klEQVR4nO3b63KqOgAFYEgkJNxFEcS7vv87HrDb0xJCEnr2kTizvpn+au1kNfdLPQ8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUGCciiiLSfQnBKVu6PDaYRPOjVHjNsUhOfi9d5cGxyQgJ31bU3yGFP5DSiR9kJDsn/sgquGRuhySBVGJ1QibWxTjeH/sL5W8u9gx2CXk7na93ijNnM1oljEptvl7qbEabhCJQp5IylpGTQ6tFQp7bBOwklYvVaE4o9pYBO6VYIoOeMaHY2Af0/WJqslmOKWHYzAnox5+XkJ7mBEw+r5Xy46wqbB0cTQ0JRTonYPl5Y2lYj2PsNoeyLs/BeJGaR0ul0NEnHM8UmyriNAwpJYLdN4NOmmZLhdDSJyRSvvQufvS0brN4+VGTtXvjaE+bkG2lhBe5o4Vi/armwsFxtKdNGEor7kTR0ZjYPuvx9LYiz6RNyOPhN2PlWMlE/4e4u7oN1ieUVmzlRE+jWb5xtI0aEsrfPE6OJQ4fZOjrUPpm4eSEZzCrlfqVg6syk1kjjb/K3JzzdPSzxWjRltbRp2WcN+N3drUgH9VW563avgQNI59xoN8zrLynDqH2h4o7PEP8ZNg9aQ5KV0HdCu5+VRp2wHQ6YW8XX4nrIf/zKcbqto6cbq6mkyi+MkXsthxOTyGmhOxhTthtnQ7uDjvGE2Fud2B6uri6uTCf6ltG9IvMzSHH5mbmYdEX+2p8ONkbbW7XGL/ZVePWxYh2d8Ck0t8BvzwcbKjW9/itzR3U6XMTPg9Ha/NNYuDeiGqd0OsPR7O6MFxkuNdO5yTshIRu40STsiBvKri1mQm9vrmKrNnspiI6d3kxP2Gv65SV6oVUp3Zt+fa7hB1GRRsrmuvGtTvEXyf0nu31PEqYuNYR5Zd7q3lVwDO5Q55cW9cIqTftZjYyxuRFq2vThbzD3SmmbO05BZXPVP+3ohoxT1XQTCpfPk5Ik7tupdK6kpBVqWLpz+TN33gojLqeetZdyUgvbpZqpSzrCrIdFV/Ie4bRJah43l3k028rs+GUkS6W8DnmNVJzY3IT8xupgPzVzUqhLjpbD3/BzMH4r3m9oDwOyxmN1iXt8HPhd/mTqzKj/LJP0ZHf4bsxJo/vcrLx01ipBtigCe63Yvw28yL9htsidRj9/DsH6683PzzajleW0kBDpPk8KTPx405Gtai5L9EPhXRwvQoO9aW8qbYHw/JFirOL/Hz1IkE6IqrOozOqdIF8HlE8TpswbKSRfAX8csr3RbFXbhODBZal/G4d0D8M7rjt/zLfru9vpKp73CmDuczuPF+yX2Ak5eqNqtLwRVA41Ug1ljimYa31O2b5DfNoJjA6LrI5DB+273xHFw+8ndEA/GXaaC+0rMXt+ISFiTktdbfY9p4xm6polIsRUllXY7LkCc3kzPav9DpRPhY1kyeHAwu/ThRbfTHzdvoQMBS1OePyN6SMlNO98VRPbI3+CMVdf/eUxsyBY1JKS3WX2pXUfNAtsnLyXmZ38Bw5JKWkOsohk3hN7M7/+v9zvo3XovnxYfkL3oJxQtdlHOzzPN8HcXllsx78dB/nbXO4fX2+2Bzrijv4wo2FnBMhug3Q7/6fnlFOXp8PnUsHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADw1/0DJWc2sWyHi6kAAAAASUVORK5CYII=', title: 'Javascript'},
        {image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX6xVL////6wkX6w0r++vH97Mr6xE36w0v6wkb6wUL6wT/847P+9eT///36xlP+8dr97tH7znH83J796ML70Hj6ymX+9+n72JP71Yj+8dn6ymL83qT84Kv/+/T836n71o370Hf85bn704L6zWxs+jlpAAAE7klEQVR4nO3b63KqOgAFYEgkJNxFEcS7vv87HrDb0xJCEnr2kTizvpn+au1kNfdLPQ8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUGCciiiLSfQnBKVu6PDaYRPOjVHjNsUhOfi9d5cGxyQgJ31bU3yGFP5DSiR9kJDsn/sgquGRuhySBVGJ1QibWxTjeH/sL5W8u9gx2CXk7na93ijNnM1oljEptvl7qbEabhCJQp5IylpGTQ6tFQp7bBOwklYvVaE4o9pYBO6VYIoOeMaHY2Af0/WJqslmOKWHYzAnox5+XkJ7mBEw+r5Xy46wqbB0cTQ0JRTonYPl5Y2lYj2PsNoeyLs/BeJGaR0ul0NEnHM8UmyriNAwpJYLdN4NOmmZLhdDSJyRSvvQufvS0brN4+VGTtXvjaE+bkG2lhBe5o4Vi/armwsFxtKdNGEor7kTR0ZjYPuvx9LYiz6RNyOPhN2PlWMlE/4e4u7oN1ieUVmzlRE+jWb5xtI0aEsrfPE6OJQ4fZOjrUPpm4eSEZzCrlfqVg6syk1kjjb/K3JzzdPSzxWjRltbRp2WcN+N3drUgH9VW563avgQNI59xoN8zrLynDqH2h4o7PEP8ZNg9aQ5KV0HdCu5+VRp2wHQ6YW8XX4nrIf/zKcbqto6cbq6mkyi+MkXsthxOTyGmhOxhTthtnQ7uDjvGE2Fud2B6uri6uTCf6ltG9IvMzSHH5mbmYdEX+2p8ONkbbW7XGL/ZVePWxYh2d8Ck0t8BvzwcbKjW9/itzR3U6XMTPg9Ha/NNYuDeiGqd0OsPR7O6MFxkuNdO5yTshIRu40STsiBvKri1mQm9vrmKrNnspiI6d3kxP2Gv65SV6oVUp3Zt+fa7hB1GRRsrmuvGtTvEXyf0nu31PEqYuNYR5Zd7q3lVwDO5Q55cW9cIqTftZjYyxuRFq2vThbzD3SmmbO05BZXPVP+3ohoxT1XQTCpfPk5Ik7tupdK6kpBVqWLpz+TN33gojLqeetZdyUgvbpZqpSzrCrIdFV/Ie4bRJah43l3k028rs+GUkS6W8DnmNVJzY3IT8xupgPzVzUqhLjpbD3/BzMH4r3m9oDwOyxmN1iXt8HPhd/mTqzKj/LJP0ZHf4bsxJo/vcrLx01ipBtigCe63Yvw28yL9htsidRj9/DsH6683PzzajleW0kBDpPk8KTPx405Gtai5L9EPhXRwvQoO9aW8qbYHw/JFirOL/Hz1IkE6IqrOozOqdIF8HlE8TpswbKSRfAX8csr3RbFXbhODBZal/G4d0D8M7rjt/zLfru9vpKp73CmDuczuPF+yX2Ak5eqNqtLwRVA41Ug1ljimYa31O2b5DfNoJjA6LrI5DB+273xHFw+8ndEA/GXaaC+0rMXt+ISFiTktdbfY9p4xm6polIsRUllXY7LkCc3kzPav9DpRPhY1kyeHAwu/ThRbfTHzdvoQMBS1OePyN6SMlNO98VRPbI3+CMVdf/eUxsyBY1JKS3WX2pXUfNAtsnLyXmZ38Bw5JKWkOsohk3hN7M7/+v9zvo3XovnxYfkL3oJxQtdlHOzzPN8HcXllsx78dB/nbXO4fX2+2Bzrijv4wo2FnBMhug3Q7/6fnlFOXp8PnUsHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADw1/0DJWc2sWyHi6kAAAAASUVORK5CYII=', title: 'Vue'},
        {image: 'https://ibb.co/MP6xKRm', title: '프론트1'},
        {image: 'https://ibb.co/MP6xKRm', title: '프론트2'},
        {image: 'https://ibb.co/MP6xKRm', title: '프론트3'},
        {image: 'https://ibb.co/MP6xKRm', title: '백1'},
        {image: 'https://ibb.co/MP6xKRm', title: '백2'},
        {image: 'https://ibb.co/MP6xKRm', title: 'Python'},
        {image: 'https://ibb.co/MP6xKRm', title: 'Java'},
        {image: 'https://ibb.co/MP6xKRm', title: 'PHP'},
        {image: 'https://ibb.co/MP6xKRm', title: '게임1'},
        {image: 'https://ibb.co/MP6xKRm', title: 'github'},
        {image: 'https://ibb.co/MP6xKRm', title: 'gitlab'},
        {image: 'https://ibb.co/MP6xKRm', title: 'redmine'},
    ];

    return (
        <div>
            <Top><Topbar /></Top>
            <LecMaindiv>
                <Searchbar />
                <LecMain>
                    <LecMainleft>
                        <MainLecField name="웹개발" sub1="HTML/CSS" sub2="Javascript" sub3="Vue" color= "#FFC000" />
                        <MainLecField name="프론트앤드" sub1="프론트1" sub2="프론트2" sub3="프론트3" color= "#A9D18E" />
                        <MainLecField name="백앤드" sub1="백1" sub2="백2" color= "#F4B183" />
                        <MainLecField name="프로그래밍 언어" sub1="Python" sub2="Java" sub3="PHP"color= "#8FAADC"  />
                        <MainLecField name="게임 만들기" sub1="게임1" color= "#BB7EEE" />
                        <MainLecField name="프로젝트 관리" sub1="github" sub2="gitlab" sub3="redmine" color= "#BFBFBF" />
                    </LecMainleft>
                    <LecMainright>
                        <BestUser />
                        <BestLecturer />
                    </LecMainright>
                </LecMain>
            </LecMaindiv>
        </div>
    );
}

export default MainPage;