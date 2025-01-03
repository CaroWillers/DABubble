import {
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { EmojiPicker } from 'ngx-easy-emoji-picker';
import { ChatService } from '../../core/services/chat.service';
import { HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-emoji-picker',
  standalone: true,
  imports: [EmojiPicker],
  templateUrl: './emoji-picker.component.html',
  styleUrls: ['./emoji-picker.component.scss'],
  encapsulation: ViewEncapsulation.None, // Damit CSS-Stile von außen wirken
})
export class EmojiPickerComponent {
  @Output() emojiSelectedChat = new EventEmitter<string>();
  @Output() emojiSelectedReaction = new EventEmitter<string>();

  constructor(public chatService: ChatService) {}

  /**
   * Event-Handler für die Auswahl eines Emojis im Chat.
   * @param emoji Das ausgewählte Emoji.
   */
  onEmojiSelectedChat(emoji: string): void {
    this.emojiSelectedChat.emit(this.decodeHtmlEntity(emoji));
  }

  /**
   * Event-Handler für die Auswahl eines Emojis als Reaktion.
   * @param emoji Das ausgewählte Emoji.
   */
  onEmojiSelectedReaction(emoji: string): void {
    this.emojiSelectedReaction.emit(this.decodeHtmlEntity(emoji));
  }

  /**
   * Hilfsfunktion zum Decodieren von HTML-Entities in Emojis.
   * @param input Der HTML-kodierte Text.
   * @returns Der dekodierte Text.
   */
  private decodeHtmlEntity(input: string): string {
    const parser = new DOMParser();
    const decoded = parser.parseFromString(input, 'text/html').documentElement
      .textContent;
    return decoded ?? input; // Fallback, falls keine Decodierung möglich
  }
}
