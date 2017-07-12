let people = customers.results
let _ul = document.querySelector('ul')

people.forEach((currentItem, index) => {
  const _li = document.createElement('li')

  const _pic = document.createElement('img')
  _pic.src = currentItem.picture.large
  _li.appendChild(_pic)

  const name = document.createElement('p')
  name.classList = 'name'
  name.textContent = `${currentItem.name.first} ${currentItem.name.last}`
  _li.appendChild(name)

  const email = document.createElement('p')
  email.classList = 'email'
  email.textContent = currentItem.email
  _li.appendChild(email)

  const location1 = document.createElement('p')
  location1.textContent = currentItem.location.street
  _li.appendChild(location1)

  const location2 = document.createElement('p')
  location2.classList = 'location'
  location2.textContent = `${currentItem.location.city}, ${currentItem.location.state} ${currentItem.location.postcode}`
  _li.appendChild(location2)

  const phone = document.createElement('p')
  phone.classList = 'phone'
  phone.textContent = currentItem.phone
  _li.appendChild(phone)

  const social = document.createElement('p')
  social.classList.add('social', 'noblur')
  social.textContent = currentItem.id.value

  social.addEventListener('mouseover', function() {
    if (social.className != 'noblur') {
      social.className = 'noblur'
    }
  })

  social.addEventListener('mouseout', function() {
    if (social.className != 'social') {
      social.className = 'social'
    }
  })

  _li.appendChild(social)

  _ul.appendChild(_li)
})
