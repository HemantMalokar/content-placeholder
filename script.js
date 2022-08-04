const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');


const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 1500)

function getData() {
    header.innerHTML ='<img src="https://images.unsplash.com/photo-1462332420958-a05d1e002413?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1507&q=80" alt="Galaxy"/>'
    title.innerHTML = 'Hi, I am UX designer'
    excerpt.innerHTML = 'I have a 2 years of experince in this field and work on many big projects'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/10.jpg" alt=""/>'
    name.innerHTML ='John Bogal'
    date.innerHTML ='4 Aug, 2022'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))

}