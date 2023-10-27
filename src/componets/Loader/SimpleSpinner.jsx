import { Spinner } from "@chakra-ui/react";

const SinpleSpinner = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Spinner 
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
                mt={5}
                mb={5}
            />
        </div>
    )
};

export default SinpleSpinner;