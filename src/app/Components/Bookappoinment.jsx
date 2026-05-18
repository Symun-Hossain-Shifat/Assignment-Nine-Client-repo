"use client";

import {Envelope} from "@gravity-ui/icons";
import {Button, FieldError, Input,  Modal, Surface, TextField} from "@heroui/react";
import {Label} from "@heroui/react";
import { FaRegCalendarAlt } from "react-icons/fa";
export function WithForm() {
  return (
    <Modal>
      <Button className='rounded-none my-3 ' variant="outline">Book Appointment Now</Button>
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
                <form className="flex flex-col gap-4">
                     <TextField className="w-full" name="email" type="email" isRequired>
                    <Label>User Email </Label>
                    <Input placeholder="Enter your email" />
                  </TextField>
                  <TextField className="w-full" name="name" type="text" isRequired>
                    <Label>Doctor Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                 
                  <TextField className="w-full" name="name" type="text" isRequired>
                    <Label>Patient Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>

                  <TextField className="w-full" name="name" type="text" isRequired>
                    <Label>Gender</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                   
                  <TextField className="w-full" name="phone" type="tel" isRequired>
                    <Label>Phone</Label>
                    <Input placeholder="Enter your phone number" />
                  </TextField>

                   <TextField name="departureDate" type="date" isRequired>
                  <Label>Appointment Date</Label>
                  <Input type="date" className="rounded-2xl" />
                  <FieldError />
                </TextField>
                  
                   <TextField name="departureDate" isRequired>
                  <Label>Appointment Time</Label>
                  <Input className="rounded-2xl" />
                  <FieldError />
                </TextField>
                   <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button slot="close">Confirm Booking</Button>
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