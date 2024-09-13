import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SeedsService{
    public GetDoctor(): object {
        const Doctor = [
          {
            id: 1,
            name: 'Ali',
            specialist: 'cardioligy',
            experience: 15,//years
            hospital: 'City Hospital',
            contact:'111-222-333'
          },
            {
            id: 2,
            name: 'Moumin',
            specialist: 'Cardiology',
            experience: 15, // years
            hospital: 'City Hospital',
            contact: '111-222-333'
        },
        
         {
            id: 3,
            name: 'Ayesha',
            specialist: 'Neurology',
            experience: 10, // years
            hospital: 'National Hospital',
            contact: '222-333-444'
        },
        
     {
            id: 4,
            name: 'Ahmed',
            specialist: 'Orthopedics',
            experience: 8, // years
            hospital: 'General Hospital',
            contact: '333-444-555'
        },
        
        {
            id: 5,
            name: 'Sara',
            specialist: 'Dermatology',
            experience: 12, // years
            hospital: 'Skin Care Hospital',
            contact: '444-555-666'
        },
        
        ];
        return Doctor;
    }
}
