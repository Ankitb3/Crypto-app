import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../components/magicui/animatedModal";

export function AddReview() {

  return (
    <div className=" flex items-center justify-center mb-2 ">
      <Modal>
        <ModalTrigger className="bg-transparent border text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Add Your Review
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            🧾🖊
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h2>form</h2>
          </ModalContent>
          <ModalFooter className="gap-4">
            <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
              Cancel
            </button>
            <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
              ADD
            </button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}

