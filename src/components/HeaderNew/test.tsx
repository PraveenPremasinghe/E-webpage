'use client';

import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Textarea,
  Divider
} from "@heroui/react";
import { PrimaryButton } from "@/components/ui/ShinyButton";

export default function ContactModal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onOpenChange();
  };

  return (
    <>
      <Button
        onPress={onOpen}
        color="warning"
        variant="flat"
        className="font-medium"
      >
        Contact Form Here
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur" size="lg">
        <ModalContent className="max-w-md">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-2 p-6 text-center text-3xl font-bold">
                Let&apos;s Have A Chat 👋
                <p className="text-lg font-normal text-gray-500">
                  We&apos;ll Get Back To You Soon
                </p>
              </ModalHeader>

              <ModalBody className="relative pb-20"> {/* Added padding-bottom */}
                <form onSubmit={handleSubmit} className="space-y-6"> {/* Added padding-bottom */}
                  <div>
                    <label htmlFor="name" className="mb-2 block font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#a12266]"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#a12266]"
                      placeholder="Your email address"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#a12266]"
                      placeholder="Your message"
                      rows={5}
                      required
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <PrimaryButton
                      dotColor="bg-primary"
                      textColor="text-primary"
                      hoverTextColor="text-white"
                      backgroundColor="bg-[#a122661a]"
                      borderColor="border-pink-800"
                    >
                      Send Message
                    </PrimaryButton>
                  </div>
                </form>

                {/* Phone number section */}
                <div
                  className="absolute bottom-0 left-0 right-0 rounded-b-[10px] border-t border-gray-200 bg-primary p-4">
  <div className="text-center text-2xl text-white">
    <span>Call us: </span>
    <a
      href="tel:+94458718711"
      className="font-semibold hover:underline"
    >
      +94 45871 8711
    </a>
  </div>
</div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
