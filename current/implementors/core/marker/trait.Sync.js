(function() {var implementors = {};
implementors["serenity"] = [{"text":"impl Sync for CacheAndHttp","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl Sync for OpCode","synthetic":true,"types":[]},{"text":"impl Sync for ApplicationInfo","synthetic":true,"types":[]},{"text":"impl Sync for BotApplication","synthetic":true,"types":[]},{"text":"impl Sync for CurrentApplicationInfo","synthetic":true,"types":[]},{"text":"impl Sync for Team","synthetic":true,"types":[]},{"text":"impl Sync for TeamMember","synthetic":true,"types":[]},{"text":"impl Sync for MembershipState","synthetic":true,"types":[]},{"text":"impl Sync for Attachment","synthetic":true,"types":[]},{"text":"impl&lt;H&gt; Sync for MessagesIter&lt;H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;H: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Embed","synthetic":true,"types":[]},{"text":"impl Sync for EmbedAuthor","synthetic":true,"types":[]},{"text":"impl Sync for EmbedField","synthetic":true,"types":[]},{"text":"impl Sync for EmbedFooter","synthetic":true,"types":[]},{"text":"impl Sync for EmbedImage","synthetic":true,"types":[]},{"text":"impl Sync for EmbedProvider","synthetic":true,"types":[]},{"text":"impl Sync for EmbedThumbnail","synthetic":true,"types":[]},{"text":"impl Sync for EmbedVideo","synthetic":true,"types":[]},{"text":"impl Sync for GuildChannel","synthetic":true,"types":[]},{"text":"impl Sync for Message","synthetic":true,"types":[]},{"text":"impl Sync for MessageReaction","synthetic":true,"types":[]},{"text":"impl Sync for MessageApplication","synthetic":true,"types":[]},{"text":"impl Sync for MessageActivity","synthetic":true,"types":[]},{"text":"impl Sync for MessageReference","synthetic":true,"types":[]},{"text":"impl Sync for ChannelMention","synthetic":true,"types":[]},{"text":"impl Sync for MessageFlags","synthetic":true,"types":[]},{"text":"impl Sync for PrivateChannel","synthetic":true,"types":[]},{"text":"impl Sync for Reaction","synthetic":true,"types":[]},{"text":"impl Sync for ReactionConversionError","synthetic":true,"types":[]},{"text":"impl Sync for ChannelCategory","synthetic":true,"types":[]},{"text":"impl Sync for PermissionOverwrite","synthetic":true,"types":[]},{"text":"impl Sync for MessageType","synthetic":true,"types":[]},{"text":"impl Sync for MessageActivityKind","synthetic":true,"types":[]},{"text":"impl Sync for ReactionType","synthetic":true,"types":[]},{"text":"impl Sync for NeverFails","synthetic":true,"types":[]},{"text":"impl Sync for Channel","synthetic":true,"types":[]},{"text":"impl Sync for ChannelType","synthetic":true,"types":[]},{"text":"impl Sync for PermissionOverwriteType","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl Sync for ChannelCreateEvent","synthetic":true,"types":[]},{"text":"impl Sync for ChannelDeleteEvent","synthetic":true,"types":[]},{"text":"impl Sync for ChannelPinsUpdateEvent","synthetic":true,"types":[]},{"text":"impl Sync for ChannelUpdateEvent","synthetic":true,"types":[]},{"text":"impl Sync for GuildBanAddEvent","synthetic":true,"types":[]},{"text":"impl Sync for GuildBanRemoveEvent","synthetic":true,"types":[]},{"text":"impl Sync for GuildCreateEvent","synthetic":true,"types":[]},{"text":"impl Sync for GuildDeleteEvent","synthetic":true,"types":[]},{"text":"impl Sync for GuildEmojisUpdateEvent","synthetic":true,"types":[]},{"text":"impl Sync for GuildIntegrationsUpdateEvent","synthetic":true,"types":[]},{"text":"impl Sync for GuildMemberAddEvent","synthetic":true,"types":[]},{"text":"impl Sync for GuildMemberRemoveEvent","synthetic":true,"types":[]},{"text":"impl Sync for GuildMemberUpdateEvent","synthetic":true,"types":[]},{"text":"impl Sync for GuildMembersChunkEvent","synthetic":true,"types":[]},{"text":"impl Sync for GuildRoleCreateEvent","synthetic":true,"types":[]},{"text":"impl Sync for GuildRoleDeleteEvent","synthetic":true,"types":[]},{"text":"impl Sync for GuildRoleUpdateEvent","synthetic":true,"types":[]},{"text":"impl Sync for InviteCreateEvent","synthetic":true,"types":[]},{"text":"impl Sync for InviteDeleteEvent","synthetic":true,"types":[]},{"text":"impl Sync for GuildUnavailableEvent","synthetic":true,"types":[]},{"text":"impl Sync for GuildUpdateEvent","synthetic":true,"types":[]},{"text":"impl Sync for MessageCreateEvent","synthetic":true,"types":[]},{"text":"impl Sync for MessageDeleteBulkEvent","synthetic":true,"types":[]},{"text":"impl Sync for MessageDeleteEvent","synthetic":true,"types":[]},{"text":"impl Sync for MessageUpdateEvent","synthetic":true,"types":[]},{"text":"impl Sync for PresenceUpdateEvent","synthetic":true,"types":[]},{"text":"impl Sync for PresencesReplaceEvent","synthetic":true,"types":[]},{"text":"impl Sync for ReactionAddEvent","synthetic":true,"types":[]},{"text":"impl Sync for ReactionRemoveEvent","synthetic":true,"types":[]},{"text":"impl Sync for ReactionRemoveAllEvent","synthetic":true,"types":[]},{"text":"impl Sync for ReadyEvent","synthetic":true,"types":[]},{"text":"impl Sync for ResumedEvent","synthetic":true,"types":[]},{"text":"impl Sync for TypingStartEvent","synthetic":true,"types":[]},{"text":"impl Sync for UnknownEvent","synthetic":true,"types":[]},{"text":"impl Sync for UserUpdateEvent","synthetic":true,"types":[]},{"text":"impl Sync for VoiceServerUpdateEvent","synthetic":true,"types":[]},{"text":"impl Sync for VoiceStateUpdateEvent","synthetic":true,"types":[]},{"text":"impl Sync for WebhookUpdateEvent","synthetic":true,"types":[]},{"text":"impl Sync for GatewayEvent","synthetic":true,"types":[]},{"text":"impl Sync for Event","synthetic":true,"types":[]},{"text":"impl Sync for EventType","synthetic":true,"types":[]},{"text":"impl Sync for BotGateway","synthetic":true,"types":[]},{"text":"impl Sync for Activity","synthetic":true,"types":[]},{"text":"impl Sync for ActivityAssets","synthetic":true,"types":[]},{"text":"impl Sync for ActivityFlags","synthetic":true,"types":[]},{"text":"impl Sync for ActivityParty","synthetic":true,"types":[]},{"text":"impl Sync for ActivitySecrets","synthetic":true,"types":[]},{"text":"impl Sync for ActivityEmoji","synthetic":true,"types":[]},{"text":"impl Sync for Gateway","synthetic":true,"types":[]},{"text":"impl Sync for ClientStatus","synthetic":true,"types":[]},{"text":"impl Sync for Presence","synthetic":true,"types":[]},{"text":"impl Sync for Ready","synthetic":true,"types":[]},{"text":"impl Sync for SessionStartLimit","synthetic":true,"types":[]},{"text":"impl Sync for ActivityTimestamps","synthetic":true,"types":[]},{"text":"impl Sync for ActivityType","synthetic":true,"types":[]},{"text":"impl Sync for Emoji","synthetic":true,"types":[]},{"text":"impl&lt;H&gt; Sync for MembersIter&lt;H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;H: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Integration","synthetic":true,"types":[]},{"text":"impl Sync for IntegrationAccount","synthetic":true,"types":[]},{"text":"impl Sync for Member","synthetic":true,"types":[]},{"text":"impl Sync for PartialMember","synthetic":true,"types":[]},{"text":"impl Sync for PartialGuild","synthetic":true,"types":[]},{"text":"impl Sync for Role","synthetic":true,"types":[]},{"text":"impl Sync for Change","synthetic":true,"types":[]},{"text":"impl Sync for AuditLogs","synthetic":true,"types":[]},{"text":"impl Sync for AuditLogEntry","synthetic":true,"types":[]},{"text":"impl Sync for Options","synthetic":true,"types":[]},{"text":"impl Sync for Ban","synthetic":true,"types":[]},{"text":"impl Sync for Guild","synthetic":true,"types":[]},{"text":"impl Sync for GuildEmbed","synthetic":true,"types":[]},{"text":"impl Sync for GuildPrune","synthetic":true,"types":[]},{"text":"impl Sync for GuildInfo","synthetic":true,"types":[]},{"text":"impl Sync for GuildUnavailable","synthetic":true,"types":[]},{"text":"impl Sync for Target","synthetic":true,"types":[]},{"text":"impl Sync for Action","synthetic":true,"types":[]},{"text":"impl Sync for ActionChannel","synthetic":true,"types":[]},{"text":"impl Sync for ActionChannelOverwrite","synthetic":true,"types":[]},{"text":"impl Sync for ActionMember","synthetic":true,"types":[]},{"text":"impl Sync for ActionRole","synthetic":true,"types":[]},{"text":"impl Sync for ActionInvite","synthetic":true,"types":[]},{"text":"impl Sync for ActionWebhook","synthetic":true,"types":[]},{"text":"impl Sync for ActionEmoji","synthetic":true,"types":[]},{"text":"impl Sync for ActionMessage","synthetic":true,"types":[]},{"text":"impl Sync for ActionIntegration","synthetic":true,"types":[]},{"text":"impl Sync for PremiumTier","synthetic":true,"types":[]},{"text":"impl Sync for GuildContainer","synthetic":true,"types":[]},{"text":"impl Sync for GuildStatus","synthetic":true,"types":[]},{"text":"impl Sync for DefaultMessageNotificationLevel","synthetic":true,"types":[]},{"text":"impl Sync for ExplicitContentFilter","synthetic":true,"types":[]},{"text":"impl Sync for MfaLevel","synthetic":true,"types":[]},{"text":"impl Sync for Region","synthetic":true,"types":[]},{"text":"impl Sync for VerificationLevel","synthetic":true,"types":[]},{"text":"impl Sync for ApplicationId","synthetic":true,"types":[]},{"text":"impl Sync for ChannelId","synthetic":true,"types":[]},{"text":"impl Sync for EmojiId","synthetic":true,"types":[]},{"text":"impl Sync for GuildId","synthetic":true,"types":[]},{"text":"impl Sync for IntegrationId","synthetic":true,"types":[]},{"text":"impl Sync for MessageId","synthetic":true,"types":[]},{"text":"impl Sync for RoleId","synthetic":true,"types":[]},{"text":"impl Sync for UserId","synthetic":true,"types":[]},{"text":"impl Sync for WebhookId","synthetic":true,"types":[]},{"text":"impl Sync for AuditLogEntryId","synthetic":true,"types":[]},{"text":"impl Sync for AttachmentId","synthetic":true,"types":[]},{"text":"impl Sync for Invite","synthetic":true,"types":[]},{"text":"impl Sync for InviteUser","synthetic":true,"types":[]},{"text":"impl Sync for InviteChannel","synthetic":true,"types":[]},{"text":"impl Sync for InviteGuild","synthetic":true,"types":[]},{"text":"impl Sync for RichInvite","synthetic":true,"types":[]},{"text":"impl Sync for EmojiIdentifier","synthetic":true,"types":[]},{"text":"impl Sync for AffectedComponent","synthetic":true,"types":[]},{"text":"impl Sync for Incident","synthetic":true,"types":[]},{"text":"impl Sync for IncidentUpdate","synthetic":true,"types":[]},{"text":"impl Sync for Maintenance","synthetic":true,"types":[]},{"text":"impl Sync for UserParseError","synthetic":true,"types":[]},{"text":"impl Sync for UserIdParseError","synthetic":true,"types":[]},{"text":"impl Sync for RoleIdParseError","synthetic":true,"types":[]},{"text":"impl Sync for ChannelIdParseError","synthetic":true,"types":[]},{"text":"impl Sync for ChannelParseError","synthetic":true,"types":[]},{"text":"impl Sync for RoleParseError","synthetic":true,"types":[]},{"text":"impl Sync for IncidentStatus","synthetic":true,"types":[]},{"text":"impl Sync for Permissions","synthetic":true,"types":[]},{"text":"impl Sync for CurrentUser","synthetic":true,"types":[]},{"text":"impl Sync for User","synthetic":true,"types":[]},{"text":"impl Sync for DefaultAvatar","synthetic":true,"types":[]},{"text":"impl Sync for OnlineStatus","synthetic":true,"types":[]},{"text":"impl Sync for VoiceRegion","synthetic":true,"types":[]},{"text":"impl Sync for VoiceState","synthetic":true,"types":[]},{"text":"impl Sync for Webhook","synthetic":true,"types":[]},{"text":"impl Sync for Context","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl Sync for CreateEmbed","synthetic":true,"types":[]},{"text":"impl Sync for CreateEmbedAuthor","synthetic":true,"types":[]},{"text":"impl Sync for CreateEmbedFooter","synthetic":true,"types":[]},{"text":"impl Sync for Timestamp","synthetic":true,"types":[]},{"text":"impl Sync for CreateChannel","synthetic":true,"types":[]},{"text":"impl Sync for CreateInvite","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for CreateMessage&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for CreateAllowedMentions","synthetic":true,"types":[]},{"text":"impl Sync for EditChannel","synthetic":true,"types":[]},{"text":"impl Sync for EditGuild","synthetic":true,"types":[]},{"text":"impl Sync for EditMember","synthetic":true,"types":[]},{"text":"impl Sync for EditMessage","synthetic":true,"types":[]},{"text":"impl Sync for EditProfile","synthetic":true,"types":[]},{"text":"impl Sync for EditRole","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for ExecuteWebhook&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for GetMessages","synthetic":true,"types":[]},{"text":"impl Sync for ParseValue","synthetic":true,"types":[]},{"text":"impl Sync for Settings","synthetic":true,"types":[]},{"text":"impl Sync for Cache","synthetic":true,"types":[]},{"text":"impl Sync for Extras","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for ClientBuilder&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for Client","synthetic":true,"types":[]},{"text":"impl Sync for ShardManager","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for ShardManagerOptions&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for ShardManagerMonitor","synthetic":true,"types":[]},{"text":"impl Sync for ShardMessenger","synthetic":true,"types":[]},{"text":"impl Sync for ShardQueuer","synthetic":true,"types":[]},{"text":"impl Sync for ShardRunner","synthetic":true,"types":[]},{"text":"impl Sync for ShardRunnerOptions","synthetic":true,"types":[]},{"text":"impl Sync for GatewayIntents","synthetic":true,"types":[]},{"text":"impl Sync for ShardId","synthetic":true,"types":[]},{"text":"impl Sync for ShardRunnerInfo","synthetic":true,"types":[]},{"text":"impl Sync for ShardManagerError","synthetic":true,"types":[]},{"text":"impl Sync for ShardRunnerMessage","synthetic":true,"types":[]},{"text":"impl Sync for ChunkGuildFilter","synthetic":true,"types":[]},{"text":"impl Sync for ShardClientMessage","synthetic":true,"types":[]},{"text":"impl Sync for ShardManagerMessage","synthetic":true,"types":[]},{"text":"impl Sync for ShardQueuerMessage","synthetic":true,"types":[]},{"text":"impl Sync for ShardStageUpdateEvent","synthetic":true,"types":[]},{"text":"impl Sync for Args","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Sync for Iter&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for RawArguments&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for Configuration","synthetic":true,"types":[]},{"text":"impl Sync for WithWhiteSpace","synthetic":true,"types":[]},{"text":"impl Sync for Check","synthetic":true,"types":[]},{"text":"impl Sync for CommandOptions","synthetic":true,"types":[]},{"text":"impl Sync for Command","synthetic":true,"types":[]},{"text":"impl Sync for HelpCommand","synthetic":true,"types":[]},{"text":"impl Sync for HelpOptions","synthetic":true,"types":[]},{"text":"impl Sync for GroupOptions","synthetic":true,"types":[]},{"text":"impl Sync for CommandGroup","synthetic":true,"types":[]},{"text":"impl Sync for BucketBuilder","synthetic":true,"types":[]},{"text":"impl Sync for StandardFramework","synthetic":true,"types":[]},{"text":"impl Sync for Delimiter","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Sync for Error&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Reason","synthetic":true,"types":[]},{"text":"impl Sync for CheckResult","synthetic":true,"types":[]},{"text":"impl Sync for OnlyIn","synthetic":true,"types":[]},{"text":"impl Sync for HelpBehaviour","synthetic":true,"types":[]},{"text":"impl Sync for DispatchError","synthetic":true,"types":[]},{"text":"impl Sync for GroupCommandsPair","synthetic":true,"types":[]},{"text":"impl Sync for SuggestedCommandName","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for Command&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for Suggestions","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for CustomisedHelpData&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for Shard","synthetic":true,"types":[]},{"text":"impl Sync for ConnectionStage","synthetic":true,"types":[]},{"text":"impl Sync for InterMessage","synthetic":true,"types":[]},{"text":"impl Sync for ShardAction","synthetic":true,"types":[]},{"text":"impl Sync for ReconnectType","synthetic":true,"types":[]},{"text":"impl Sync for LightMethod","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for AttachmentType&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for GuildPagination","synthetic":true,"types":[]},{"text":"impl Sync for Http","synthetic":true,"types":[]},{"text":"impl Sync for DiscordJsonError","synthetic":true,"types":[]},{"text":"impl Sync for ErrorResponse","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl Sync for Ratelimiter","synthetic":true,"types":[]},{"text":"impl Sync for Ratelimit","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for RatelimitedRequest&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for RequestBuilder&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for Request&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for Route","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for RouteInfo&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for Typing","synthetic":true,"types":[]},{"text":"impl Sync for Colour","synthetic":true,"types":[]},{"text":"impl Sync for Content","synthetic":true,"types":[]},{"text":"impl Sync for MessageBuilder","synthetic":true,"types":[]},{"text":"impl Sync for CustomMessage","synthetic":true,"types":[]},{"text":"impl Sync for ContentSafeOptions","synthetic":true,"types":[]},{"text":"impl Sync for ContentModifier","synthetic":true,"types":[]},{"text":"impl Sync for MessageFilter","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for MessageCollectorBuilder&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for CollectReply&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for MessageCollector","synthetic":true,"types":[]},{"text":"impl Sync for ReactionFilter","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for ReactionCollectorBuilder&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for CollectReaction&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for ReactionCollector","synthetic":true,"types":[]},{"text":"impl Sync for ReactionAction","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()