import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {styles} from './Styles';

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  content: string;
  onConfirm?: () => void;
  confirmText?: string;
  cancelText?: string;
}

const CustomModal: React.FC<CustomModalProps> = ({
  visible,
  onClose,
  title,
  content,
  onConfirm,
  confirmText = 'Confirm',
  cancelText = 'Ok',
}) => {
  return (
    <Modal
      transparent
      visible={visible}
      onRequestClose={onClose}
      animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.content}>{content}</Text>
          <View style={styles.buttonContainer}>
            {onConfirm && (
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  onConfirm();
                  onClose();
                }}>
                <Text style={styles.buttonText}>{confirmText}</Text>
              </TouchableOpacity>
            )}
            {/* Render cancel button only if there's no confirm callback */}
            {!onConfirm && (
              <TouchableOpacity style={styles.button} onPress={onClose}>
                <Text style={styles.buttonText}>{cancelText}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
