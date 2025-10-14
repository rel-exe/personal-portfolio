import React, { useState } from 'react'

const items = [
  { id: 1, title: 'Boxed Water', img: '/images/Rectangle-49.png', tags: ['website'] },
  { id: 2, title: 'Verve Coffee', img: '/images/Rectangle-52.png', tags: ['branding'] },
  { id: 3, title: 'Children T-Shirt', img: '/images/Rectangle-51.png', tags: ['tshirt'] },
  { id: 4, title: 'Tote Bag', img: '/images/Rectangle-50.png', tags: ['package'] },
  { id: 5, title: 'Box Packaging', img: '/images/Rectangle-54.png', tags: ['website'] },
  { id: 6, title: 'Coco Oil', img: '/images/Rectangle-53.png', tags: ['poster'] },
  { id: 7, title: 'Graphic T-shirt', img: '/images/Rectangle-55.png', tags: ['tshirt'] },
  { id: 8, title: 'Paper Cup', img: '/images/Rectangle-57.png', tags: ['branding'] },
  { id: 9, title: 'Coffee Package', img: '/images/Rectangle-56.png', tags: ['package'] },
]

const filters = ['*','branding','tshirt','package','website','poster']

export default function Portfolio(){
  const [active, setActive] = useState('*')

  const visible = items.filter(i => active === '*' ? true : i.tags.includes(active))

  return (
    <section id="portfolio" className="section">
      <h2>Portfolio</h2>

      <div style={{margin:'12px 0'}}>
        {filters.map(f => (
          <button
            key={f}
            className={`filter-button ${active === f ? 'active' : ''}`}
            onClick={() => setActive(f)}
            aria-pressed={active === f}
          >
            {f === '*' ? 'All' : f.charAt(0).toUpperCase()+f.slice(1)}
          </button>
        ))}
      </div>

      <div className="isotope-container">
        {visible.map(item => (
          <div className="portfolio-card" key={item.id}>
            <img src={item.img} alt={item.title} />
            <div style={{padding:8}}>
              <h4 style={{margin:0}}>{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}