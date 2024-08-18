export const schedule: Array<eventDay> =[
    {
        dayNumber: '1',
        date: 'Saturday, Oct 19th',
        events: [
            {time: 'Time', eventName: 'Event'},
            {time: '9:00 AM', eventName: 'Doors open | Check in'}, 
            {time: '10:00 AM', eventName: 'Opening ceremony'},
            {time: '10:30 AM', eventName: 'Team formation'}, 
            {time: '11:30 AM', eventName: 'Hacking begins'},
            {time: '12:00 PM', eventName: 'De-stressing area opens'}, 
            {time: '1:00 PM', eventName: 'Lunch'},
            {time: '2:00 PM', eventName: 'ML/AI Workshop'}, 
            {time: '4:00 PM', eventName: 'Graphic Design Workshop'},
            {time: '6:00 PM', eventName: 'Hackers de-stress activity'}, 
            {time: '7:00 PM', eventName: 'Dinner'}

        ]
    },
    {
        dayNumber: '2',
        date: 'Sunday, Oct 20th',
        events: [
            {time: 'Time', eventName: 'Event'},
            {time: '12:00 AM', eventName: 'Scary Movie'}, 
            {time: '7:00 AM', eventName: 'Breakfast'},
            {time: '12:00 PM', eventName: 'Submit Projects'}, 
            {time: '1:00 PM', eventName: 'Lunch'},
            {time: '1:30 PM', eventName: 'Workshop (TBA)'}, 
            {time: '2:00 PM', eventName: 'Lunch'},
            {time: '4:00 PM', eventName: 'Awards Ceremony'}, 
            {time: '4:00 PM', eventName: 'Graphic Design Workshop'}
        ]
    }
]

interface eventDay {
    dayNumber:  string,
    date: string,
    events: Array<evnt>
}

interface evnt {
    time: string,
    eventName: string
}