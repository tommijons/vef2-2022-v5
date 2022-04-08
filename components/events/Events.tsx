
import Link from 'next/link';
import s from './Events.module.scss';

type Props = {
  id: number;
  name: string;
  slug: string;
  description: string;
  created?:string;
  updated?:string;
}

export function Events({ title, events }:{title:string, events:Props[]}):JSX.Element {

  return (
    <section className={s.events}>
      <h2 className={s.events__title}>{title}</h2>
      <ul className={s.events__list}>
        {events.map((item, i) => {
          return (
            <li className={s.events__event} key={i}>
              <p className={s.events__eventLink}><Link href={`/events/${item.id}`} >{item.name}</Link></p>
              <p className={s.events__eventDescription}>{item.description}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
