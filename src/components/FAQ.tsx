import { useState } from "react";
import { RiArrowRightSLine, RiArrowDownSLine } from "react-icons/ri";

export function FAQ() {
  const faq = [
    {
      pergunta: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      resposta:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra suspendisse potenti nullam ac tortor vitae. Orci a scelerisque purus semper eget duis at tellus at. Volutpat odio facilisis mauris sit amet massa. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Nibh cras pulvinar mattis nunc sed. Lobortis feugiat vivamus at augue. Dictum non consectetur a erat nam at lectus. Sit amet nisl suscipit adipiscing bibendum est. Massa id neque aliquam vestibulum. Eget dolor morbi non arcu risus.",
    },
    {
      pergunta: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      resposta:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra suspendisse potenti nullam ac tortor vitae. Orci a scelerisque purus semper eget duis at tellus at. Volutpat odio facilisis mauris sit amet massa. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Nibh cras pulvinar mattis nunc sed. Lobortis feugiat vivamus at augue. Dictum non consectetur a erat nam at lectus. Sit amet nisl suscipit adipiscing bibendum est. Massa id neque aliquam vestibulum. Eget dolor morbi non arcu risus.",
    },
    {
      pergunta: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      resposta:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra suspendisse potenti nullam ac tortor vitae. Orci a scelerisque purus semper eget duis at tellus at. Volutpat odio facilisis mauris sit amet massa. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Nibh cras pulvinar mattis nunc sed. Lobortis feugiat vivamus at augue. Dictum non consectetur a erat nam at lectus. Sit amet nisl suscipit adipiscing bibendum est. Massa id neque aliquam vestibulum. Eget dolor morbi non arcu risus.",
    },
    {
      pergunta: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      resposta:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra suspendisse potenti nullam ac tortor vitae. Orci a scelerisque purus semper eget duis at tellus at. Volutpat odio facilisis mauris sit amet massa. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Nibh cras pulvinar mattis nunc sed. Lobortis feugiat vivamus at augue. Dictum non consectetur a erat nam at lectus. Sit amet nisl suscipit adipiscing bibendum est. Massa id neque aliquam vestibulum. Eget dolor morbi non arcu risus.",
    },
  ];

  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    setOpenIndexes(
      openIndexes.includes(index)
        ? openIndexes.filter((i) => i !== index)
        : [...openIndexes, index]
    );
  };

  return (
    <div>
      <h2 className="mb-6 text-4xl font-bold">FAQ</h2>
      {faq.map((item, index) => (
        <div key={index}>
          <div
            className={`flex w-auto flex-grow items-center justify-between gap-4 p-8 ${
              index === 0 ? "rounded-t-lg" : ""
            } ${
              index === faq.length - 1 && !openIndexes.includes(index)
                ? "rounded-b-lg"
                : ""
            } cursor-pointer bg-custom-gray bg-opacity-95 backdrop-blur-2xl transition-all duration-500 ease-in-out`}
            onClick={() => toggleIndex(index)}
          >
            <span className="font-semibold leading-loose">{item.pergunta}</span>
            <span className="mx-4">
              {openIndexes.includes(index) ? (
                <RiArrowDownSLine size={24} />
              ) : (
                <RiArrowRightSLine size={24} />
              )}
            </span>
          </div>
          <div
            className={`overflow-hidden transition-all duration-200 ease-in-out ${
              openIndexes.includes(index) ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div
              className={`flex flex-grow items-center justify-center gap-32 bg-zinc-900/70 p-6 leading-loose backdrop-blur-sm ${
                index === faq.length - 1 ? "rounded-b-lg" : ""
              }`}
            >
              {item.resposta}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
