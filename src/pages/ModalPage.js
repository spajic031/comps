import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const actionBar = (
    <Button onClick={handleClose} primary>
      Accept
    </Button>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae
        magna feugiat, commodo sapien ut, blandit ante. Donec consequat faucibus
        diam, vitae consectetur sem viverra nec. Vestibulum ullamcorper lectus
        at turpis vulputate, et ultricies metus ornare. Mauris porttitor libero
        in magna tempor, ac viverra sem dignissim. Nulla turpis tellus, gravida
        eget cursus accumsan, porttitor sit amet est. Morbi ornare laoreet
        nulla, et gravida nunc cursus sit amet. Quisque est diam, semper id
        facilisis quis, vulputate sed arcu. Etiam ipsum ligula, laoreet vel
        finibus eget, tincidunt vel est. Ut eget egestas magna. Aliquam
        porttitor, libero quis congue cursus, lectus libero lobortis odio, nec
        vehicula sapien turpis at velit. Etiam sed hendrerit diam. Phasellus nec
        rhoncus nisl. Etiam non nisi a sem tempus iaculis. Maecenas vitae mauris
        mi. Sed eget risus quis justo pharetra imperdiet et vel turpis.
        Vestibulum et odio id orci finibus tincidunt. Morbi vehicula augue
        maximus nisl efficitur scelerisque. Suspendisse eu placerat justo. Sed
        sit amet finibus magna. Donec volutpat, neque ut imperdiet iaculis, ex
        ex dictum nibh, vitae feugiat quam neque eu eros. Aenean malesuada justo
        quam, eu vehicula neque venenatis eget. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Curabitur lacinia
        vehicula risus, id dapibus sapien sodales vitae. Duis ullamcorper et
        quam nec porttitor. In nisi sem, luctus at sem rutrum, viverra vehicula
        lectus. Mauris scelerisque velit eget metus accumsan hendrerit. Duis
        sollicitudin rhoncus mauris sit amet tempor. Nullam rhoncus tristique
        lorem quis vulputate. Praesent rutrum fermentum pretium. Donec iaculis
        ipsum ac ultrices mattis. Quisque quis pretium odio. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin
        massa nibh, hendrerit id viverra varius, porttitor interdum velit. Donec
        condimentum vitae elit et ullamcorper. Proin dignissim eros turpis, at
        sollicitudin libero lobortis id. In ipsum ipsum, cursus vitae porttitor
        sit amet, sodales laoreet turpis. Cras odio justo, sollicitudin non
        posuere id, malesuada nec ligula. Phasellus pellentesque molestie leo
        nec posuere. Duis consequat risus sit amet eleifend dictum. Maecenas
        commodo enim velit, eu vestibulum ipsum tristique a. Praesent vulputate
        sapien maximus libero egestas feugiat. Nullam velit est, consectetur
        mattis velit in, interdum vehicula magna. Curabitur a sagittis lorem.
        Duis tristique mauris vitae arcu auctor lobortis. Nulla quis odio et
        massa pretium finibus laoreet sit amet eros. Nullam vehicula purus at
        ante sodales, vulputate iaculis tellus suscipit. Fusce dictum orci sed
        lacinia sodales. Nam ut metus eu augue vehicula egestas et sed ligula.
        Donec nec sagittis tellus. Donec cursus libero id metus semper, in
        maximus quam rhoncus. Vestibulum suscipit nisl urna, eget sodales enim
        laoreet ut. Aliquam nibh magna, interdum vel justo in, pulvinar tempor
        lorem. Fusce elementum orci dolor, blandit posuere magna malesuada at.
        Proin ornare placerat eros non commodo.
      </p>
      <p>
        Cras odio justo, sollicitudin non posuere id, malesuada nec ligula.
        Phasellus pellentesque molestie leo nec posuere. Duis consequat risus
        sit amet eleifend dictum. Maecenas commodo enim velit, eu vestibulum
        ipsum tristique a. Praesent vulputate sapien maximus libero egestas
        feugiat. Nullam velit est, consectetur mattis velit in, interdum
        vehicula magna. Curabitur a sagittis lorem. Duis tristique mauris vitae
        arcu auctor lobortis. Nulla quis odio et massa pretium finibus laoreet
        sit amet eros. Nullam vehicula purus at ante sodales, vulputate iaculis
        tellus suscipit. Fusce dictum orci sed lacinia sodales. Nam ut metus eu
        augue vehicula egestas et sed ligula. Donec nec sagittis tellus. Donec
        cursus libero id metus semper, in maximus quam rhoncus. Vestibulum
        suscipit nisl urna, eget sodales enim laoreet ut. Aliquam nibh magna,
        interdum vel justo in, pulvinar tempor lorem. Fusce elementum orci
        dolor, blandit posuere magna malesuada at. Proin ornare placerat eros
        non commodo.
      </p>
    </div>
  );
}

export default ModalPage;
