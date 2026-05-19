"use client";

import { authClient } from "@/lib/auth-client";

import {Button, FieldError, Input,  Modal, Surface, TextField} from "@heroui/react";
import {Label} from "@heroui/react";
import { useRouter } from "next/navigation";


import { FaRegCalendarAlt } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
export function UpdateBooking ({Data}) {
  // console.log(Data)
  const router = useRouter()
  
  const { data: session } = authClient.useSession()
  const UserInfo = session?.user
  // console.log(UserInfo)


  const Updatebookingdata =  async (e) => {
  e.preventDefault()

  const FormData = e.target
  const email = FormData.Email.value
  const doctorname = FormData.Doctor.value 
  const patientname = FormData.Patient.value 
  const phone = FormData.Phone.value
  const gender = FormData.Gender.value 
  const date = FormData.Date.value 
  const time = FormData.Time.value
  const BookingData = {email , doctorname , patientname , phone , gender , date , time }
  console.log(BookingData)
  

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_PORT}/allbookings/${Data._id}` , {
    method : 'PATCH',
    headers : {
        'content-type' : 'application/json'
    },
    body : JSON.stringify(BookingData)
  })
  const result = await res.json()
  console.log(result)
  if(result){
    alert('Update Successfull')
    router.refresh()
  }
  }

  return (
    <Modal>
      <Button className='rounded-none flex items-center gap-2' variant="secondary"> <RxUpdate /> Update Now</Button>
      <Modal.Backdrop
      className="bg-linear-to-t from-black/80 via-black/40 to-transparent dark:from-zinc-800/80 dark:via-zinc-800/40"
        variant="blur">
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <FaRegCalendarAlt size={20} />
              </Modal.Icon>
              <Modal.Heading>Book Appoinment</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and we'll get back to you. 
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={Updatebookingdata} className="flex flex-col gap-4">
                     <TextField defaultValue = {UserInfo?.email}  className="w-full" name="Email" type="email" isRequired>
                    <Label>User Email </Label>
                    <Input   />
                  </TextField>
                  <TextField  defaultValue = {Data.doctorname} className="w-full" name="Doctor" type="text" isRequired>
                    <Label>Doctor Name</Label>
                    <Input  />
                  </TextField>
                 
                  <TextField defaultValue = {Data.patientname} className="w-full" name="Patient" type="text" isRequired>
                    <Label>Patient Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>

                  <TextField defaultValue = {Data.gender} className="w-full" name="Gender" type="text" isRequired>
                    <Label>Gender</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                   
                  <TextField defaultValue= {Data.phone} className="w-full" name="Phone" type="tel" isRequired>
                    <Label>Phone</Label>
                    <Input placeholder="Enter your phone number" />
                  </TextField>

                   <TextField defaultValue = {Data.date}  name="Date" type="date" isRequired>
                  <Label>Appointment Date</Label>
                  <Input type="date" className="rounded-2xl" />
                  <FieldError />
                </TextField>
                  
                   <TextField defaultValue = {Data.time} name="Time" isRequired>
                  <Label>Appointment Time</Label>
                  <Input className="rounded-2xl" />
                  <FieldError />
                </TextField>
                   <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit" slot= 'close'>Confirm Booking</Button>
            </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}