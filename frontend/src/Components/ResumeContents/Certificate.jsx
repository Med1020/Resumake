import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setComponentInEditMode,
  setcomponentIsExpanded,
} from "../../Redux/Slice/displayComponent";
import CancelSave from "../CancelSaveBtns";
import { v4 as uuidv4 } from "uuid";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";
import useCustomHooks from "../../customHooks/customHook";
import { RxDragHandleDots2 } from "react-icons/rx";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";

const Certificate = () => {
  const { componentInEditMode, componentIsExpanded } = useSelector(
    (state) => state.showComponent
  );
  const { certificateList } = useSelector((state) => state.resumeContent);

  const {
    handleDelete,
    handleChange,
    handleCancel,
    handleSave,
    handleDragEnd,
  } = useCustomHooks();

  const dispatch = useDispatch();

  const [newCertificate, setNewCertificate] = useState({
    id: uuidv4(),
    certificate: "",
    AdditionalInfo: "",
  });
  const [previousState, setPreviousState] = useState(null);

  const onSave = () => {
    handleSave({ newState: newCertificate, elementName: "certificate" });
    setNewCertificate({
      id: uuidv4(),
      certificate: "",
      AdditionalInfo: "",
    });
    setPreviousState(null);
  };

  const onCancel = () => {
    handleCancel({
      previousState: previousState,
      newState: newCertificate,
      elementName: "certificate",
    });
    setNewCertificate({
      id: uuidv4(),
      certificate: "",
      AdditionalInfo: "",
    });
  };
  const onDelete = (id) => {
    handleDelete(id, "certificate");
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    const updatedCertificate = { ...newCertificate, [name]: value };
    setNewCertificate(updatedCertificate);
    handleChange(newCertificate.id, updatedCertificate, "certificate");
  };
  const onEdit = (id) => {
    const [elementToEdit] = certificateList.filter(
      (certificate) => certificate.id === id
    );
    setNewCertificate(elementToEdit);
    setPreviousState(elementToEdit);
    dispatch(setComponentInEditMode("certificate"));
  };
  const onDragEnd = (result) => {
    handleDragEnd({ result: result, elementName: "certificate" });
  };
  return (
    <div>
      {certificateList.length > 0 && componentInEditMode === "" && (
        <div className="bg-white my-3 p-5 w-full rounded-lg">
          <div className=" flex items-center">
            <div className="cursor-move">
              <RxDragHandleDots2 />
            </div>
            <div
              className=" flex justify-between w-full cursor-pointer"
              onClick={() =>
                dispatch(
                  componentIsExpanded === "certificate"
                    ? dispatch(setcomponentIsExpanded(""))
                    : dispatch(setcomponentIsExpanded("certificate"))
                )
              }
            >
              <header className="p-1 text-xl font-bold text-neutral-700">
                Certificate
              </header>
              <button className="px-5">
                {componentIsExpanded === "certificate" ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown />
                )}
              </button>
            </div>
          </div>
          <div>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="certificate">
                {(droppableProvider) => (
                  <div
                    ref={droppableProvider.innerRef}
                    {...droppableProvider.droppableProps}
                  >
                    {componentIsExpanded === "certificate" &&
                      certificateList.map(
                        ({ id, certificate, AdditionalInfo }, index) => (
                          <Draggable
                            draggableId={String(id)}
                            index={index}
                            key={id}
                          >
                            {(draggableProvider) => (
                              <div
                                className="p-5 w-full border-b-2 flex justify-between cursor-pointer"
                                ref={draggableProvider.innerRef}
                                {...draggableProvider.draggableProps}
                              >
                                <div
                                  className="flex justify-center items-center p-4 cursor-move "
                                  {...draggableProvider.dragHandleProps}
                                >
                                  <RxDragHandleDots2 />
                                </div>
                                <div
                                  className="w-full"
                                  onClick={() => onEdit(id)}
                                >
                                  <span className="font-bold">
                                    {certificate}
                                  </span>
                                  <span className="font-italic">
                                    {AdditionalInfo}
                                  </span>
                                </div>
                                <div>
                                  <button
                                    className="bg-white hover:bg-gray-200 rounded-full p-4"
                                    onClick={() => onDelete(id)}
                                  >
                                    <MdOutlineDelete />
                                  </button>
                                </div>
                              </div>
                            )}
                          </Draggable>
                        )
                      )}
                    {droppableProvider.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
            {componentIsExpanded === "certificate" && (
              <div className="flex justify-center">
                <button
                  className="border rounded-2xl border-2 p-2 m-3"
                  onClick={() =>
                    dispatch(setComponentInEditMode("certificate"))
                  }
                >
                  Add Certificate
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {componentInEditMode === "certificate" && (
        <>
          <div className="bg-white my-3 p-5 w-full rounded-lg shadow-lg ">
            <div className="p-1">
              <h1 className="text-xl font-bold mb-5">Create Certificate</h1>
              <label htmlFor="certificate" className="block py-2 font-semibold">
                Certificate
              </label>
              <input
                id="certificate"
                name="certificate"
                placeholder="Enter certificate "
                className="block border rounded-md border-gray-300 w-full p-2 mb-4 bg-gray-100"
                onChange={onChange}
                value={newCertificate.certificate}
              />
            </div>
            <div className="p-1">
              <label htmlFor="info" className="block py-2 font-semibold">
                Additional Information
              </label>
              <input
                id="info"
                name="info"
                placeholder="any additional information"
                className="block border rounded-md border-gray-300 w-full p-2 mb-4 bg-gray-100"
                onChange={onChange}
                value={newCertificate.AdditionalInfo}
              />
            </div>
          </div>

          <CancelSave onCancel={onCancel} onSave={onSave} />
        </>
      )}
    </div>
  );
};

export default Certificate;
