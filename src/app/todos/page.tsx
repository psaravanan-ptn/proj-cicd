const people = [
    {
        name: 'Calvin Hawkins',
        email: 'calvin.hawkins@example.com',
        image:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Kristen Ramos',
        email: 'kristen.ramos@example.com',
        image:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Ted Fox',
        email: 'ted.fox@example.com',
        image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]
import { Fieldset, Legend } from '@headlessui/react'
import { Metadata } from 'next'
import Link from 'next/link'
 
export const metadata: Metadata = {
  title: {
    template: '%s | List ToDos 2',
    default: 'List ToDos 1'
  }
}

export default function Todo() {
    return (
        <div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>
                <Fieldset disabled className="space-y-8 data-[disabled]:opacity-50">
                    <Legend className="text-lg font-bold"><span>Before shipping</span><span>Shipping details</span></Legend>
                    {/* ... */}
                </Fieldset>
            </div>

            <ul className="divide-y divide-gray-200">
                {people.map((person) => (
                    <Link href="/todos/todo" className="">
                        <li key={person.email} className="py-4 flex">
                            <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">{person.name}</p>
                                <p className="text-sm text-gray-500">{person.email}</p>
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>

    )
}